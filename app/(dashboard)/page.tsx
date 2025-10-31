import { Button } from '@/components/ui/button';
import { ArrowRight, Waves, Radar, Brain } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center w-full  lg:col-span-10 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Visual Search, Retrieval and Detection in Satellite Imagery
                <span className="block text-violet-500 mt-3">Automated visual search & dataset generation</span>
              </h1>
              <p className="mt-6 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                To develop a system to automatically search, identify and detect objects in a wide range of satellite images, producing labelled datasets that can be further trained and fine-tuned to object detection models directly.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://github.com/StarkVision-AI"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg rounded-full"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Visual Search
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Efficiently query large satellite imagery collections by example or attribute to find candidate scenes and objects.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <Radar className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Retrieval & Ranking
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Retrieve and rank results by relevance, scale, and context to prioritize high-quality candidates for annotation.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <Waves className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Detection & Labelling
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Automatically generate labelled examples and bounding boxes from detections to bootstrap and fine-tune object detection models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Build labelled datasets from satellite imagery
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                A complete pipeline for visual search, retrieval and detection that produces high-quality labelled data ready for training modern object detection models.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="https://github.com/StarkVision-AI" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full"
                >
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
