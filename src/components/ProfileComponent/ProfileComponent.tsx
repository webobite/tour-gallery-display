import React, { Fragment } from 'react';
import Input from '../UI/InputComponent';
import classes from './profile.module.css'
// profile component 
const ProfileComponent = ({ match: { params: { username } } }: any) => {

    const label_class = "tracking-wide sm:text-sm md: text-md lg:text-lg -mb-6";
    const input_style = "px-4 py-2 rounded shadow appearance-none";

    return (
      <Fragment>
        <div className="grid grid-cols-1 sm:grid-cols-5 bg-red-50 w-full h-screen">
          <div className="bg-blue-300 md:flex hidden flex-col justify-start align-end ">
            <div className="flex align-start mt-10 border-b-2 p-2 ">
              <a href="#">
                <i className="fas fa-pencil-alt"></i>
                <span className="ml-2 text-black hover:text-white active:text-white ">
                  Edit Profile
                </span>
              </a>
            </div>
            <div className="flex align-start border-b-2 mt-5 p-2">
              <a href="#">
                <i className="far fa-envelope"></i>
                <span className="ml-2 text-black hover:text-white active:text-white ">
                  My Notifications
                </span>
              </a>
            </div>
            <div className="flex align-start border-b-2 mt-5 p-2">
              <a href="#">
                <i className="fas fa-key"></i>
                <span className="ml-2 text-black hover:text-white active:text-white ">
                  Password and Security
                </span>
              </a>
            </div>
          </div>
          <div className="w-full sm:col-span-5 md:col-span-4 bg-gray-300 flex flex-col align-end">
            <h1 className=" mt-10 text-xl text-blue-500">
              Update Your Profile
            </h1>
            {/* Ediatable Avatar */}
            <div className="w-24 h-24 border-2 border-gray bg-red mx-auto rounded-full mt-5 bg-gray-400 relative">
              <i className="fas fa-user mt-10 inline-block"> </i>
              <a href="#" className="absolute bottom-0 right-2 text-black">
                <i className="fas fa-edit"></i>
              </a>
            </div>

            {/* editable form */}

            <form className="grid grid-cols-2 grid-rows-7 border-green w-2/3 mx-auto gap-x-6 mt-2 mb-4">
              <div className={`col-span-2 md:col-span-1  ${classes.profile}`}>
                <label htmlFor="first-name" className={label_class}>
                  First Name
                </label>
                <br />
                <Input
                  type="text"
                  id="first-name"
                  name="firstname"
                  className={input_style}
                />
              </div>
              <div className={`col-span-2 md:col-span-1  ${classes.profile}`}>
                <label htmlFor="last-name" className={label_class}>
                  Last Name
                </label>
                <br />
                <Input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className={input_style}
                />
              </div>
              <div className={`col-span-2  ${classes.profile}`}>
                <label htmlFor="email" className={label_class}>
                  Email
                </label>
                <br />
                <Input
                  type="text"
                  id="email"
                  name="email"
                  className={input_style}
                />
              </div>
              <h2 className="col-span-2 mt-4 -mb-8">Contact Details</h2>
              <div className={`col-span-2 md:col-span-1  ${classes.profile}`}>
                <label htmlFor="tel" className={label_class}>
                  Tel
                </label>
                <br />
                <Input
                  type="text"
                  id="tel"
                  name="tel-code"
                  className={input_style}
                />
              </div>
              <div
                className={`col-span-2 md:col-span-1 relative ${classes.profile}`}
              >
                <Input type="text" name="tel" className={classes.tel} />
              </div>
              <div className={`col-span-2 md:col-span-1  ${classes.profile}`}>
                <label htmlFor="country" className={label_class}>
                  Country
                </label>
                <br />
                <Input
                  type="text"
                  id="country"
                  name="country"
                  className={input_style}
                />
              </div>
              <div className={`col-span-2 md:col-span-1  ${classes.profile}`}>
                <label htmlFor="city" className={label_class}>
                  City
                </label>
                <br />
                <Input
                  type="text"
                  id="city"
                  name="city"
                  className={input_style}
                />
              </div>
              <div className={`col-span-2  ${classes.profile}`}>
                <label htmlFor="password" className={label_class}>
                  Password
                </label>
                <br />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className={input_style}
                />
              </div>
              <div className={`col-span-2  ${classes.profile}`}>
                <Input
                  type="submit"
                  value="Save"
                  className="hover:bg-blue-300 hover:text-white px-4 py-2 rounded shadow appearance-none"
                />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
}

export default ProfileComponent;