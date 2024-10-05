import { storesLocations } from "../../data/storeLocations";

export default function Contact() {
  return (
    <section className="contact-us container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {storesLocations.slice(0, 2).map((elm, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold mb-4">
                Store in {elm.city}
              </h3>
              <p className="mb-4">
                {elm.address}
                <br />
                {elm.country}
              </p>
              <p className="mb-4">
                {elm.emailAddress}
                <br />
                {elm.phone}
              </p>
            </div>
          ))}
        </div>
        <div className="contact-us__form">
          <form
            className="needs-validation"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-semibold mb-10">Get In Touch</h3>
            <div className="my-4 mb-4">
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-4"
                id="contact_us_name"
                placeholder="Name *"
                required
              />
            </div>
            <div className="my-4 mb-4">
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-4"
                id="contact_us_email"
                placeholder="Email address *"
                required
              />
            </div>
            <div className="my-4 mb-4">
              <textarea
                className="w-full border border-gray-300 rounded p-4"
                placeholder="Your Message"
                cols="30"
                rows="8"
                required
              ></textarea>
            </div>
            <div className="my-4">
              <button type="submit" className="btn-contact">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// import { storesLocations } from "../../data/storeLocations";

// export default function Contact() {
//   return (
//     <section className="contact-us container mx-auto px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//           {storesLocations.slice(0, 2).map((elm, i) => (
//             <div key={i}>
//               <h3 className="text-2xl font-semibold mb-4">
//                 Store in {elm.city}
//               </h3>
//               <p className="mb-4">
//                 {elm.address}
//                 <br />
//                 {elm.country}
//               </p>
//               <p className="mb-4">
//                 {elm.emailAddress}
//                 <br />
//                 {elm.phone}
//               </p>
//             </div>
//           ))}
//         </div>
//         <div className="contact-us__form">
//           <form
//             className="needs-validation"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <h3 className="text-2xl font-semibold mb-10">Get In Touch</h3>
//             <div className="my-4">
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded p-4"
//                 id="contact_us_name"
//                 placeholder="Name *"
//                 required
//               />
//             </div>
//             <div className="my-4">
//               <input
//                 type="email"
//                 className="w-full border border-gray-300 rounded p-4"
//                 id="contact_us_email"
//                 placeholder="Email address *"
//                 required
//               />
//             </div>
//             <div className="my-4">
//               <textarea
//                 className="w-full border border-gray-300 rounded p-4"
//                 placeholder="Your Message"
//                 cols="30"
//                 rows="8"
//                 required
//               ></textarea>
//             </div>
//             <div className="my-4">
//               <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
