import React from "react";
import "./ProductPage.css";

import data from "../../data";
import { Link, useNavigate, useParams } from "react-router-dom";

import TextBox from "../../components/TextBox/TextBox";

function ProductPage() {
  let navigate = useNavigate();
  const { id } = useParams();

  const productData = data?.filter((product) => product.id === parseInt(id))[0];
  console.log(productData);
  return (
    <>
      {productData ? (
        <>
          <section className="max-w-[90%] mx-auto mb-16 mt-24 flex flex-col gap-10 laptop:flex-row laptop:items-center laptop:justify-around laptop:my-36 laptop:mx-auto min-h-[50vh] laptop:max-w-[1000px] ">
            <div
              aria={productData.title.lineOne + " " + productData.title.lineTwo}
              className={
                `creation-container w-[90%] max-w-[654px] laptop:max-w-[256px] h-[33vw] max-h-[240px] laptop:min-h-[450px]  flex background-cover cursor-pointer overlay-hidden relative mx-auto text-[rgba(255,255,255,0.8)]  hover:text-black ` +
                productData.imageMobile +
                " " +
                productData.imageDesktop
              }
            ></div>
            {/* <div
            alt={productData.title.lineOne + " " + productData.title.lineTwo}
            className="hidden laptop:flex max-w-[750px]"
          /> */}
            <TextBox additionalClasses="laptop:bg-white relative laptop:px-20 laptop:py-10 laptop:max-w-[40rem] laptop:w-[40rem]  ">
              <h2 className="headings text-center">
                {productData.title.lineOne + " " + productData.title.lineTwo}
              </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                cursus eget neque bibendum dictum. Sed quis purus ante. Praesent
                nisl neque, vestibulum ac turpis eu, accumsan mattis sapien.
                Praesent faucibus, tortor ultrices pharetra feugiat, enim felis
                fringilla ex, eu elementum sem dolor a augue. Maecenas nec
                rhoncus enim, at volutpat metus. Vestibulum orci enim, mollis
                volutpat metus sed, tempus varius libero. Nunc vitae libero et
                diam maximus convallis. Donec sed mauris et ante pulvinar
                sodales. Praesent at lacus vulputate, aliquet est nec, ultricies
                ligula.
              </p>
            </TextBox>
          </section>
          {/* <div className="flex w-full"> */}
            <div
              onClick={() => navigate(-1)}
              to="/loopstudios"
              className="text-black laptop:text-2xl font-bold mx-auto laptop:ml-auto laptop:mr-20 border-2 border-black px-4 py-2 w-40 font-secondary uppercase tracking-[5px] laptop:w-max  flex justify-center text-sm hover:text-white hover:bg-black ease-in-out duration-200"
            >
              Return &#8617;
            </div>
          {/* </div> */}
        </>
      ) : (
        <section className="max-w-[90%] mx-auto mb-16 mt-24 flex flex-col gap-10 laptop:flex-row laptop:items-center laptop:justify-around laptop:my-36 laptop:mx-auto min-h-[50vh] laptop:max-w-[1000px] ">
          <TextBox>
            <h2>Please wait until the data is loaded</h2>
          </TextBox>
        </section>
      )}
    </>
  );
}

export default ProductPage;
