import React from "react";

const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
const PRESS_DURATION = 90;
const MOVE_DURATION = 500;
const MOBILE_DURATION = 400;

const idleTransition = {
  active: false,
  direction: null,
  reveal: false,
  simple: false,
};

function nextPaint(callback) {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(callback);
  });
}

function getRect(element) {
  if (!element) return null;
  const rect = element.getBoundingClientRect();
  if (![rect.left, rect.top, rect.width, rect.height].every(Number.isFinite)) return null;
  if (rect.width < 2 || rect.height < 2) return null;
  return rect;
}

function isOnScreen(rect) {
  return Boolean(
    rect
    && rect.right > 0
    && rect.bottom > 0
    && rect.left < window.innerWidth
    && rect.top < window.innerHeight,
  );
}

function getImageElement(element) {
  if (!element) return null;
  return element instanceof HTMLImageElement ? element : element.querySelector("img");
}

function createOverlay({ element, imageSource, rect }) {
  const image = getImageElement(element);
  const overlay = document.createElement("img");
  const imageStyle = image ? window.getComputedStyle(image) : null;
  const frameStyle = window.getComputedStyle(element);

  overlay.className = "project-transition-overlay";
  overlay.alt = "";
  overlay.src = image?.currentSrc || image?.src || imageSource || "";
  overlay.style.left = `${rect.left}px`;
  overlay.style.top = `${rect.top}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
  overlay.style.borderRadius = frameStyle.borderRadius;
  overlay.style.objectFit = imageStyle?.objectFit || "cover";
  overlay.style.objectPosition = imageStyle?.objectPosition || "50% 50%";
  document.body.appendChild(overlay);
  return overlay;
}

function findProjectHero(projectId) {
  return (
    document.querySelector(`[data-project-hero="${projectId}"]`)
    || document.querySelector(".project-case-study [data-project-hero]")
    || document.querySelector(".project-page-stage [data-project-hero]")
  );
}

function findProjectThumbnail(projectId) {
  const candidates = Array.from(
    document.querySelectorAll(`[data-project-card="${projectId}"] [data-project-thumbnail]`),
  );

  return candidates.find((element) => isOnScreen(getRect(element))) || candidates[0] || null;
}

export default function useProjectTransition({ onOpen, onClose }) {
  const [transition, setTransition] = React.useState(idleTransition);
  const activeRef = React.useRef(false);
  const animationRef = React.useRef(null);
  const callbacksRef = React.useRef({ onOpen, onClose });
  const lastProjectRef = React.useRef(null);
  const overlayRef = React.useRef(null);
  const runRef = React.useRef(0);
  const timersRef = React.useRef(new Set());

  React.useLayoutEffect(() => {
    callbacksRef.current = { onOpen, onClose };
  }, [onOpen, onClose]);

  const clearTimers = React.useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current.clear();
  }, []);

  const schedule = React.useCallback((callback, delay) => {
    const timer = window.setTimeout(() => {
      timersRef.current.delete(timer);
      callback();
    }, delay);
    timersRef.current.add(timer);
    return timer;
  }, []);

  const cleanTemporaryElements = React.useCallback(() => {
    animationRef.current?.cancel?.();
    animationRef.current = null;
    overlayRef.current?.remove();
    overlayRef.current = null;
    document.querySelectorAll(".is-transition-source").forEach((element) => {
      element.classList.remove("is-transition-source");
    });
    document.querySelectorAll(".is-project-pressing").forEach((element) => {
      element.classList.remove("is-project-pressing");
    });
  }, []);

  const finish = React.useCallback((runId) => {
    if (runId !== runRef.current) return;
    clearTimers();
    cleanTemporaryElements();
    activeRef.current = false;
    setTransition(idleTransition);
  }, [cleanTemporaryElements, clearTimers]);

  const fadeOverlayAndFinish = React.useCallback((runId, direction) => {
    setTransition((current) => ({ ...current, reveal: true, simple: true }));
    const overlay = overlayRef.current;
    if (!overlay) {
      schedule(() => finish(runId), 260);
      return;
    }

    animationRef.current = overlay.animate(
      [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: direction === "opening" ? "scale(1.025)" : "scale(0.98)" },
      ],
      { duration: 260, easing: EASING, fill: "forwards" },
    );
    schedule(() => finish(runId), 280);
  }, [finish, schedule]);

  const openProject = React.useCallback((project, context = {}) => {
    if (!project || activeRef.current) return false;

    const runId = runRef.current + 1;
    runRef.current = runId;
    activeRef.current = true;
    lastProjectRef.current = project;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 680px)").matches;
    const sourceElement = context.sourceElement || findProjectThumbnail(project.id);
    const sourceRect = getRect(sourceElement);
    const imageSource = getImageElement(sourceElement)?.currentSrc || project.preview || "";
    const simple = reducedMotion || mobile || !sourceElement || !sourceRect || !imageSource;

    setTransition({ active: true, direction: "opening", reveal: false, simple });

    if (simple) {
      callbacksRef.current.onOpen(project);
      if (reducedMotion) {
        finish(runId);
      } else {
        schedule(() => setTransition((current) => ({ ...current, reveal: true })), 30);
        schedule(() => finish(runId), MOBILE_DURATION);
      }
      return true;
    }

    const sourceCard = context.cardElement || sourceElement.closest("[data-project-card]");
    sourceCard?.classList.add("is-project-pressing");

    schedule(() => {
      if (runId !== runRef.current) return;
      sourceCard?.classList.remove("is-project-pressing");
      overlayRef.current = createOverlay({ element: sourceElement, imageSource, rect: sourceRect });
      sourceElement.classList.add("is-transition-source");
      callbacksRef.current.onOpen(project);

      nextPaint(() => {
        if (runId !== runRef.current) return;
        const destination = findProjectHero(project.id);
        const destinationRect = getRect(destination);
        if (!destination || !destinationRect) {
          fadeOverlayAndFinish(runId, "opening");
          return;
        }

        const destinationStyle = window.getComputedStyle(destination);
        schedule(() => {
          setTransition((current) => ({ ...current, reveal: true }));
        }, 310);

        animationRef.current = overlayRef.current.animate(
          [
            {
              left: `${sourceRect.left}px`,
              top: `${sourceRect.top}px`,
              width: `${sourceRect.width}px`,
              height: `${sourceRect.height}px`,
              borderRadius: window.getComputedStyle(sourceElement).borderRadius,
            },
            {
              left: `${destinationRect.left}px`,
              top: `${destinationRect.top}px`,
              width: `${destinationRect.width}px`,
              height: `${destinationRect.height}px`,
              borderRadius: destinationStyle.borderRadius,
            },
          ],
          { duration: MOVE_DURATION, easing: EASING, fill: "forwards" },
        );

        schedule(() => finish(runId), MOVE_DURATION + 40);
      });
    }, PRESS_DURATION);

    return true;
  }, [fadeOverlayAndFinish, finish, schedule]);

  const closeProject = React.useCallback((project) => {
    if (activeRef.current) return false;

    const currentProject = project || lastProjectRef.current;
    if (!currentProject) {
      callbacksRef.current.onClose();
      return true;
    }

    const runId = runRef.current + 1;
    runRef.current = runId;
    activeRef.current = true;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 680px)").matches;
    const sourceElement = findProjectHero(currentProject.id);
    const sourceRect = getRect(sourceElement);
    const imageSource = getImageElement(sourceElement)?.currentSrc || currentProject.preview || "";
    const simple = reducedMotion || mobile || !sourceElement || !sourceRect || !imageSource;

    setTransition({ active: true, direction: "closing", reveal: false, simple });

    if (simple) {
      callbacksRef.current.onClose(currentProject);
      if (reducedMotion) {
        finish(runId);
      } else {
        schedule(() => setTransition((current) => ({ ...current, reveal: true })), 30);
        schedule(() => finish(runId), MOBILE_DURATION);
      }
      return true;
    }

    overlayRef.current = createOverlay({ element: sourceElement, imageSource, rect: sourceRect });
    sourceElement.classList.add("is-transition-source");
    callbacksRef.current.onClose(currentProject);

    nextPaint(() => {
      if (runId !== runRef.current) return;
      const destination = findProjectThumbnail(currentProject.id);
      const destinationRect = getRect(destination);
      if (!destination || !destinationRect || !isOnScreen(destinationRect)) {
        fadeOverlayAndFinish(runId, "closing");
        return;
      }

      destination.classList.add("is-transition-source");
      schedule(() => {
        setTransition((current) => ({ ...current, reveal: true }));
      }, 90);

      animationRef.current = overlayRef.current.animate(
        [
          {
            left: `${sourceRect.left}px`,
            top: `${sourceRect.top}px`,
            width: `${sourceRect.width}px`,
            height: `${sourceRect.height}px`,
            borderRadius: window.getComputedStyle(sourceElement).borderRadius,
          },
          {
            left: `${destinationRect.left}px`,
            top: `${destinationRect.top}px`,
            width: `${destinationRect.width}px`,
            height: `${destinationRect.height}px`,
            borderRadius: window.getComputedStyle(destination).borderRadius,
          },
        ],
        { duration: MOVE_DURATION, easing: EASING, fill: "forwards" },
      );

      schedule(() => finish(runId), MOVE_DURATION + 30);
    });

    return true;
  }, [fadeOverlayAndFinish, finish, schedule]);

  React.useEffect(() => () => {
    runRef.current += 1;
    clearTimers();
    cleanTemporaryElements();
  }, [cleanTemporaryElements, clearTimers]);

  const className = transition.active
    ? [
        "is-project-transitioning",
        `project-transition-${transition.direction}`,
        transition.simple ? "project-transition-simple" : "",
        transition.reveal ? "project-transition-reveal" : "",
      ].filter(Boolean).join(" ")
    : "";

  return {
    className,
    closeProject,
    isActive: () => activeRef.current,
    openProject,
  };
}
