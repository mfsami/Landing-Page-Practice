import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGitSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00DF9A] ">REACT</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          culpa quam velit est nisi, exercitationem architecto suscipit rerum,
          corporis iusto reprehenderit repudiandae sapiente. Dolorum minus,
          asperiores magnam explicabo similique vitae.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaFacebookSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGitSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-3 flex justify-between"></div>
      <div>
        <h6 className="font-medium text-gray-400">Solutions</h6>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Ecommerce</li>
          <li className="py-2 text-sm">Insides</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Solutions</h6>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Ecommerce</li>
          <li className="py-2 text-sm">Insides</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Solutions</h6>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Ecommerce</li>
          <li className="py-2 text-sm">Insides</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Solutions</h6>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Ecommerce</li>
          <li className="py-2 text-sm">Insides</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
