import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="flex flex-col space-y-10 justify-center m-10 bg-primary py-10 px-10">
        <nav class="flex justify-center flex-wrap gap-6 text-white font-medium">
          <a class="hover:text-gray-300" href="#">
            Home
          </a>
          <a class="hover:text-gray-300" href="#">
            <Link to="/about">About</Link>
          </a>
          <a class="hover:text-gray-300" href="#">
            <Link to="/services">Services</Link>
          </a>
          <a class="hover:text-gray-300" href="#">
            <Link to="/categories">Categories</Link>
          </a>
          <a class="hover:text-gray-300" href="#">
            <Link to="/contact">Contact</Link>
          </a>
        </nav>

        <div class="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
              alt=""
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
              alt=""
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
              alt=""
            />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
              alt=""
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/twitter.png"
              alt=""
            />
          </a>
        </div>
        <p class="text-center text-white font-medium">
          &copy; 2024 Diashi-Nam Ltd. All rights reservered.
        </p>
      </footer>
    </>
  );
}
