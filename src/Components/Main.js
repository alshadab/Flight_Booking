import React, { useEffect, useState } from "react";
import "./styles.css";
import svg1 from "./img/icons/Frame.svg";
import svg2 from "./img/icons/Frame.svg";
import svg3 from "./img/icons/Vector (1).svg";
import svg4 from "./img/icons/Vector (3).svg";
import logo from "./img/clipboard_vectorized.png";
import { useDispatch, useSelector } from "react-redux";
import { book } from "../redux/flight/actions";
import RowComponent from "./RowComponent";

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const Butt = data.length > 2 ? true : false;
  const [input, setInput] = useState({
    id: 0,
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketclassName: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value, id: Math.floor(Math.random() * 100) });
  };
  const addHandler = (e) => {
    e.preventDefault();

    dispatch(book(input));
    setInput({
      id: 0,
      from: "",
      to: "",
      date: "",
      guests: "",
      ticketclassName: "",
    });
  };

  return (
    <div>
      <header id="header">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero lws-inputform" onSubmit={addHandler}>
              {/* <!-- From --> */}
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src={svg1} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                    value={input.from}
                    onChange={handleInput}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src={svg2} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                    value={input.to}
                    onChange={handleInput}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                  value={input.date}
                  onChange={handleInput}
                />
              </div>

              {/* <!-- Guests --> */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src={svg3} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                    value={input.guests}
                    onChange={handleInput}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- className --> */}
              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src={svg4} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketclassName"
                    id="lws-ticketclassName"
                    required
                    value={input.ticketclassName}
                    onChange={handleInput}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button
                className="addCity"
                type="submit"
                id="lws-addCity"
                disabled={Butt}
              >
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Preview Data --> */}
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>

            {/* <!-- Row  --> */}
            {data.map((elm, index) => (
              <RowComponent data={elm} id={index} />
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};

export default Main;
