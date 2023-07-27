import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorsCopy = { ...errors };

    if (!name) {
      errorsCopy.name = "Please fill in your name.";
    } else {
      errorsCopy.name = "";
    }

    if (!email) {
      errorsCopy.email = "Please fill in your email address.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorsCopy.email = "Please enter a valid email address.";
      } else {
        errorsCopy.email = "";
      }
    }

    if (!message) {
      errorsCopy.message = "Please fill in your message.";
    } else {
      errorsCopy.message = "";
    }

    if (errorsCopy.name || errorsCopy.email || errorsCopy.message) {
      setErrors(errorsCopy);
      return;
    }

    setErrors({ name: "", email: "", message: "" });
    const formData = { name, email, message };

    try {
      // API isteğini burada gerçekleştirebilirsiniz.
      // Örnek bir fetch API isteği:
      const response = await fetch("https://api.example.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // API'den dönen yanıtı kontrol edelim.
      if (!response.ok) {
        setErrors({
          ...errorsCopy,
          message: "An error occurred while submitting the form.",
        });
        return;
      }

      // Form başarıyla gönderildi, gerekirse başka işlemler yapabilirsiniz.
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        ...errorsCopy,
        message: "An error occurred while submitting the form.",
      });
    }
  };

  const handleOpenPopover = () => {
    setPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setPopoverOpen(false);
  };

  return (
    <div>
      {/* Desktop Form */}
      <div className="hidden md:block absolute bottom-0 right-6 p-6 bg-white w-[300px] h-[430px] z-50">
        <h4 className="text-customGreen">Let's Talk</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-control h-[100px]">
            <label className="label">
              <span className="label-text text-slate-950">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input bg-white input-bordered input-accent w-full max-w-xs h-[40px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
          <div className="form-control h-[100px]">
            <label className="label">
              <span className="label-text text-slate-950">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input bg-white input-bordered input-accent w-full max-w-xs h-[40px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="form-control h-[100px]">
            <label className="label">
              <span className="label-text text-slate-950 text-xs">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-accent bg-white h-[60px]"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-customDarkGreen py-2 mt-6 text-white font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Popover */}
      <div className="md:hidden z-50 relative">
        {/* Message Icon */}
        <button
          className="fixed bottom-4 right-4 p-2 bg-white rounded-full shadow-lg z-50"
          onClick={handleOpenPopover}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-customGreen"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </button>

        {/* Popover */}
        {isPopoverOpen && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
            <div className="absolute top-4 right-4">
              <button onClick={handleClosePopover}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 bg-white w-[300px] h-[420px] z-40">
              <h4 className="text-customGreen">Let's Talk</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-control h-[100px]">
                  <label className="label">
                    <span className="label-text text-slate-950">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="input bg-white input-bordered input-accent w-full max-w-xs h-[40px]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>
                <div className="form-control h-[100px]">
                  <label className="label">
                    <span className="label-text text-slate-950">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type here"
                    className="input bg-white input-bordered input-accent w-full max-w-xs h-[40px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
                <div className="form-control h-[100px]">
                  <label className="label">
                    <span className="label-text text-slate-950 text-xs">
                      Message
                    </span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-accent bg-white h-[60px]"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-customDarkGreen py-2 mt-6 text-white font-medium"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
