import Head from "next/head";
import faker from "faker";
import { useState } from "react";

const foodList = [
  {
    title: `New York's best burgers`,
    content:
      "Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Ornare massa eget egestas purus viverra accumsan in. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis.",
    image:
      "api/image/w=1080&h=810/https%3A%2F%2Fsource.unsplash.com%2F1Shk_PkNkNw%2F1600x900.jpg",
  },
  {
    title: `Smoky & tender steak`,
    content:
      "Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Ornare massa eget egestas purus viverra accumsan in. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis.",
    image:
      "api/image/w=1080&h=810/https%3A%2F%2Fsource.unsplash.com%2FYr4n8O_3UPc%2F1600x900.jpg",
  },
  {
    title: `Blueberry pancakes`,
    content:
      "Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Ornare massa eget egestas purus viverra accumsan in. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis.",
    image:
      "api/image/w=1080&h=810/https%3A%2F%2Fsource.unsplash.com%2FP1aohbiT-EY%2F1600x900.jpg",
  },
];

const authorPic =
  "api/image/w=100&h=100/https%3A%2F%2Fsource.unsplash.com%2FmEZ3PoFGs_k%2F1600x900.jpg";

const Card = ({ title, image, content }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg p-4 shadow-xl">
      <div className="w-full md:w-5/12 md:pr-4 pb-4 md:pb-0">
        <img src={image} className="rounded-lg" alt={title} />
      </div>

      <div className="w-full md:w-7/12 flex flex-col justify-evenly">
        <div>
          <h1 className="text-2xl pb-2">{title}</h1>
          <p className="text-base text-gray-700 font-light pb-4">{content}</p>
        </div>

        <div className="flex">
          <img
            src={authorPic}
            alt="Naomi Watson"
            className="rounded-full w-12 mr-4"
          />
          <div>
            <p className="text-sm text-gray-800">Naomi Watson</p>
            <p className="text-sm text-gray-600">May 24, 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [showMore, showMoreSet] = useState(false);

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Image transformation in NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-md mx-auto py-16 px-4">
        <h1 className="text-3xl">Image transformation API in NextJS</h1>
        <p className="mb-2 text-gray-700">
          <span>Full tutorial </span>
          <a
            href="https://monoppa.com/blog/image-transformation-in-nextjs"
            className="text-blue-600"
          >
            here
          </a>
        </p>
        <p className="mb-2 text-gray-700">
          Open dev tools and inspect images. All are generated using the custom
          image transformation API.
        </p>
        <p className="mb-2 text-gray-700">
          Food images are transformed to 1080x810
        </p>
        <p className="mb-2 text-gray-700">
          Author images are transformed to 100x100
        </p>
        <p className="mb-8 text-gray-700">
          All original image assets are 1600x900 from Unsplash.com
        </p>

        <div className="space-y-8">
          {foodList.map((food) => (
            <Card key={food.title} {...food} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              showMoreSet(!showMore);
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-md uppercase shadow-md"
          >
            More image sizes
          </button>
        </div>

        {showMore && (
          <div className="pt-8 space-y-8">
            <div>
              <h3>Original source</h3>
              <p className="text-gray-600 text-sm italic break-words">{`original_src='https%3A%2F%2Fsource.unsplash.com%2FP1aohbiT-EY%2F1600x900.jpg'`}</p>
            </div>

            <div className="w-full">
              <h3 className="text-gray-900 text-xl">Large image (1080x810)</h3>
              <p className="text-gray-600 text-sm italic pb-4">{`src='api/image/w=1080&h=810/original_src'`}</p>

              <img
                src="api/image/w=1080&h=810/https%3A%2F%2Fsource.unsplash.com%2FP1aohbiT-EY%2F1600x900.jpg"
                className="rounded-lg"
                alt="large"
              />
            </div>

            <div className="w-full">
              <h3 className="text-gray-900 text-xl">Medium image (400x300)</h3>
              <p className="text-gray-600 text-sm italic pb-4">{`src='api/image/w=400&h=300/original_src'`}</p>

              <img
                src="api/image/w=400&h=300/https%3A%2F%2Fsource.unsplash.com%2FP1aohbiT-EY%2F1600x900.jpg"
                className="rounded-lg"
                alt="medium"
              />
            </div>

            <div className="w-full">
              <h3 className="text-gray-900 text-xl">Small image (100x100)</h3>
              <p className="text-gray-600 text-sm italic pb-4">{`src='api/image/w=100&h=100/original_src'`}</p>

              <img
                src="api/image/w=100&h=100/https%3A%2F%2Fsource.unsplash.com%2FP1aohbiT-EY%2F1600x900.jpg"
                className="rounded-lg"
                alt="small"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
