
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
    <section className="w-full flex flex-col items-center py-20 bg-kalahari-sand/20 px-6">
      <h2 className="text-kalahari-darkbrown text-3xl md:text-4xl font-medium text-center">
        Blog Articles
      </h2>

      <div className="w-full max-w-5xl mt-12 max-md:mt-8">
        <div className="gap-6 flex flex-wrap justify-center">
          {articles.map((article) => (
            <div key={article.id} className="w-64 mb-6">
              <div className="bg-kalahari-charcoal flex flex-col items-center overflow-hidden rounded-t-lg shadow-md">
                <div className="py-10">
                  <img
                    src={article.image}
                    alt={`Blog article ${article.id}`}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="bg-kalahari-gravel/10 w-full py-4 px-4 text-center">
                  <h3 className="text-kalahari-darkbrown font-medium">Historic Info of Scene</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/blog"
        className="mt-12 inline-flex items-center justify-center bg-kalahari-darkbrown hover:bg-kalahari-brown text-white font-medium transition-colors rounded-full py-3 px-8"
      >
        Read More
      </Link>
    </section>
  );
};

export default BlogArticles;
