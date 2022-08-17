import React from "react";
import "./AllProductsPage.css";
import Creation from "../../components/Creations/Creation";
import data from "../../data";

function AllProductsPage() {
  const allCreationsList = data.map((item, index) => {
    return (
      <Creation
        key={`${item.name + "-" + index}`}
        mobileImage={item.imageMobile}
        desktopImage={item.imageDesktop}
        headingLineOne={item.title.lineOne}
        headingLineTwo={item.title.lineTwo}
        creationId={item.id}
      />
    );
  });
  return (
    <>
      <section className="max-w-[100%] mx-auto mb-16 my-20 flex flex-col gap-10 laptop:flex-col laptop:items-center laptop:justify-around laptop:my-36 laptop:mx-auto min-h-[50vh] laptop:max-w-[1000px] ">
        <h2 className="headings text-black mx-auto">Our Products</h2>
        <div className=" w-full mx-auto  flex flex-col justify-center items-center laptop:order-2 col-span-2 laptop:grid laptop:grid-cols-4 gap-y-7">
          {allCreationsList}
        </div>
      </section>
    </>
  );
}

export default AllProductsPage;
