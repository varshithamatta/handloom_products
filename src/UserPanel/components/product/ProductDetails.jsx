import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import {
  Box,
  Button,
  Grid,
  Grid2,
  LinearProgress,
  Rating,
} from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { Line } from "rc-progress";
import { green } from "@mui/material/colors";
import { men_kurtas } from "../../data/mens_kurtas";
import HomeDisplayCard from "../homedisplaycard/HomeDisplayCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://m.media-amazon.com/images/I/81AFxU2P5JL._SY879_.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails({ products }) {
  
  const location = useLocation();
  const navigate = useNavigate();
 // Fallback to an empty object if `product` is undefined

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || {});
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || {});

  const handleCart = () => {
    navigate(`/cart`);
  };

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto  max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900 text-left">
              NoBrand
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1 text-left">
              NoBrand Women's Chikankari Embroidered Naira Cut Kurta
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">&#8377; 479</p>
                <p className="opacity-50 line-through">&#8377; 2396</p>
                <p className="text-green-600 font-semibold">80% off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6 ">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={5.5} readOnly />
                  <p className="opacity-50 text-sm">56540 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3870 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Button
                    onClick={handleCart}
                    variant="contained"
                    sx={{
                      px: "2rem",
                      py: "1rem",
                      bgcolor: "#F8962F",
                      mt: "2rem",
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6 text-left">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and reviews */}
        <section className="mb-10">
          <h1 className="font-semibold text-lg pb-4">Recent Review & Rating</h1>
          <div className="border p-5">
            <Grid2 container spacing={7}>
              <Grid2 item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item, index) => (
                    <ProductReviewCard key={index} />
                  ))}
                </div>
                <div></div>
              </Grid2>
              <Grid2 item xs={5}>
                <h1 className="text-xl font-semibold pb-2">Product Ratings</h1>
                <div className="flex items-center space-x-3 text-left">
                  <Rating value={4.6} precision={0.5} readOnly />
                  <p className="opacity-60">594890 Ratings</p>
                </div>
                <Box className="mt-5 space-y-3">
                  <Grid2 container alignItems="center" gap={3.5}>
                    {/* Excellent Text */}
                    <Grid2 item xs={2}>
                      <p>Excellent</p>
                    </Grid2>

                    {/* Progress Line */}
                    <Grid2 item xs={7}>
                      <Line
                        percent={70}
                        strokeColor="green"
                        strokeWidth={2}
                        trailWidth={2}
                        style={{ width: "100%" }}
                      />
                    </Grid2>
                  </Grid2>
                  <Grid2 container alignItems="center" gap={2}>
                    {/* Very Good Text */}
                    <Grid2 item xs={2}>
                      <p>Very Good</p>
                    </Grid2>

                    {/* Progress Line */}
                    <Grid2 item xs={7}>
                      <Line
                        percent={30}
                        strokeColor="green"
                        strokeWidth={2}
                        trailWidth={2}
                        style={{ width: "100%" }}
                      />
                    </Grid2>
                  </Grid2>
                  <Grid2 container alignItems="center" gap={6.3}>
                    {/* Excellent Text */}
                    <Grid2 item xs={2}>
                      <p>Good</p>
                    </Grid2>

                    {/* Progress Line */}
                    <Grid2 item xs={7}>
                      <Line
                        percent={25}
                        strokeColor="green"
                        strokeWidth={2}
                        trailWidth={2}
                        style={{ width: "100%" }}
                      />
                    </Grid2>
                  </Grid2>
                  <Grid2 container alignItems="center" gap={4}>
                    {/* Excellent Text */}
                    <Grid2 item xs={2}>
                      <p>Average</p>
                    </Grid2>

                    {/* Progress Line */}
                    <Grid2 item xs={7}>
                      <Line
                        percent={20}
                        strokeColor="#ff9100"
                        strokeWidth={2}
                        trailWidth={2}
                        style={{ width: "100%" }}
                      />
                    </Grid2>
                  </Grid2>
                  <Grid2 container alignItems="center" gap={7.1}>
                    {/* Excellent Text */}
                    <Grid2 item xs={2}>
                      <p>Poor</p>
                    </Grid2>

                    {/* Progress Line */}
                    <Grid2 item xs={7}>
                      <Line
                        percent={15}
                        strokeColor="#ff1744"
                        strokeWidth={2}
                        trailWidth={2}
                        style={{ width: "100%" }}
                      />
                    </Grid2>
                  </Grid2>
                </Box>
              </Grid2>
            </Grid2>
          </div>
        </section>

        {/*similar products*/}
        <section className="pt-10">
          <h1 className="py-5 text-xl font-bold">Similar Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {men_kurtas.map((item, index) => (
              <HomeDisplayCard key={index} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
