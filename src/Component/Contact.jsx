import React from "react";

function Contact() {
  return (
    <div className="flex mr-10 w-[80vw] ">
      <div className="h-[100vh] w-[70%] py-18 px-20">
        <h3 className="text-3xl mb-3 ml-[-120%]">Contact us</h3>
        <div className="leading-[2vw] ml-[-120%]">
          <p>
            <span className="font-bold">Address:</span> PO Box 16122 Collin
            Street West, Victoria 875 United State
          </p>
          <p>
            <span className="font-bold">Email:</span> contact@marcostore.com
          </p>
          <p>
            <span className="font-bold">Phone:</span> +84 1800 585 678
          </p>
        </div>
        <p className="mt-3 ml-[-120%]">
          Monday to Friday, from 8:00 am till 8:00 pm CET and Saturday, from
          9:00 am till 6:00 pm CET (with the exception of public holidays)
        </p>
        <div className="lg:h-[60vh] py-8 ml-[-120%]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019639593417!2d144.9545555155852!3d-37.8172098797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3cf11e3%3A0x5045675218ce250!2sCollins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1635651352791!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="h-[100vh] w-full  py-18 px-20 mr-10">
        <form>
          <p className="font-bold mb-2">Full Name</p>
          <input
            className="border-1 border-gray-300 px-3 h-11 w-[35vw]"
            type="text"
            placeholder="Full Name"
          />
          <p className="font-bold mb-2 mt-5">Your Email</p>
          <input
            className="border-1 border-gray-300 px-3 h-11 w-[35vw]"
            type="text"
            placeholder="Your Email"
          />
          <p className="font-bold mb-2 mt-5">Phone Number</p>
          <input
            className="border-1 border-gray-300 px-3 h-11 w-[35vw]"
            type="text"
            placeholder="Phone Number"
          />
          <p className="font-bold mt-5">Message</p>
          <textarea
            className="mt-3 border-1 border-gray-300 p-2"
            name="text"
            id=""
            placeholder="Message"
            rows={9}
            cols={70}
          ></textarea>
          <button className="bg-black text-white px-5 py-2 mt-3 hover:bg-red-500 transition-all duration-100 ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
