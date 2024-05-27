import { createEffect, JSXElement } from 'solid-js';
import locomotiveScroll from "locomotive-scroll";
import '../locomotive-scroll.css';

// Define and export the LocomotiveScroll component
export default function LocomotiveScroll(props: { children: JSXElement }) {
  // Declare a variable to hold a reference to the scroll container element
  let scrollContainerRef: HTMLDivElement | null = null;

  // Create an effect that runs after the component is mounted and whenever the dependencies change
  createEffect(() => {
    // Check if the scroll container reference has been assigned
    if (scrollContainerRef) {
      // Initialize Locomotive Scroll with the scroll container element
      const scroll = new locomotiveScroll({
        el: scrollContainerRef,
        smooth: true, // Enable smooth scrolling
      });

      // Select the <html> element for observing size changes
      const element = document.querySelector("html");
      if (element !== null) {
        // Use ResizeObserver to update Locomotive Scroll when the element size changes
        new ResizeObserver(() => scroll.update()).observe(element);
      } else {
        // Log an error if the <html> element is not found
        console.error(
          "The element with the selector '[data-scroll-container]' was not found."
        );
      }

      // Return a cleanup function to destroy Locomotive Scroll when the component is unmounted
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  // Render the scroll container with a ref attribute to assign the DOM element to scrollContainerRef
  return (
    <div ref={el => (scrollContainerRef = el)} data-scroll-container>
      {props.children}
    </div>
  );
}
