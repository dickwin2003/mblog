import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us - 線上靈籤" },
    { name: "description", content: "Learn more about our online fortune telling service" },
  ];
};

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap py-6">
        <div className="w-full px-3">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            
            <div className="prose max-w-none">
              <p className="mb-6">
                Welcome to 線上靈籤, your trusted source for online fortune telling and spiritual guidance. 
                Our platform combines traditional wisdom with modern technology to provide you with authentic 
                and meaningful divination experiences.
              </p>

              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="mb-6">
                We strive to make traditional fortune telling practices accessible to everyone while maintaining 
                their cultural significance and spiritual integrity. Our goal is to provide guidance and insight 
                to those seeking answers in their life journey.
              </p>

              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Traditional Fortune Telling</li>
                <li>Spiritual Guidance</li>
                <li>Daily Horoscopes</li>
                <li>Personalized Readings</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6">
                Have questions or feedback? We'd love to hear from you. Reach out to us at:
                <br />
                Email: contact@example.com
                <br />
                Phone: (555) 123-4567
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
                <p>
                  123 Fortune Street
                  <br />
                  Taipei City, 100
                  <br />
                  Taiwan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
