import React from "react";
import { Link } from "react-router-dom";

const BlogArticles: React.FC = () => {
  const articles = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/693cbd4724483aac2646ff041bd8088483bbb691d0da8f97faeb7e0b4a68e9a6?placeholderIfAbsent=true",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/a023ad979330d2b28fe80332ce13b89aa2fa067715075c35abccca2833d14f4a?placeholderIfAbsent=true",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/392907dc3097e8f95b4801a5b98b734e2da89bd14a237c9b51d7c762fdad0118?placeholderIfAbsent=true",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/3fe8be36e8c9adfc244dfd08dc78acd3f975525c5d7dd372d3c292e666f32290?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-[rgba(51,51,51,1)] text-[42px] font-medium text-center">
        Blog Articles
      </h2>

      <div className="self-center w-full max-w-[1013px] mt-[54px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {articles.map((article) => (
            <div key={article.id} className="w-3/12 max-md:w-full max-md:ml-0">
              <div className="bg-[rgba(51,51,51,1)] flex flex-col items-stretch text-[23px] text-[rgba(81,80,80,1)] font-medium text-center w-full pt-[57px] max-md:mt-[19px]">
                <img
                  src={article.image}
                  alt={`Blog article ${article.id}`}
                  className="aspect-[0.75] object-contain w-[61px] self-center"
                />
                <div className="bg-[rgba(241,241,241,1)] mt-[38px] pt-[18px] pb-7 px-2.5">
                  Historic Info of Scene
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/blog"
        className="bg-[rgba(51,51,51,1)] w-[193px] max-w-full text-[13px] text-white font-medium ml-36 mt-16 px-[49px] py-[17px] rounded-[22px] max-md:ml-2.5 max-md:mt-10 max-md:px-5 inline-block text-center"
      >
        Read More
      </Link>
    </section>
  );
};

export default BlogArticles;
