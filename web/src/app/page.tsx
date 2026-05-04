import Image from "next/image";

export default function Home() {
  const images = [
    "canva-tuk-tuk-MADB6DCAh2s.jpg",
    "car134.jpg",
    "car136.jpg",
    "car172.jpg",
    "car91.jpg",
    "indianvan30.jpg",
    "istockphoto-468967228-170667a.jpg",
    "phnom-penh-cambodia-april-11-260nw-1408096805.jpg",
    "srilankavan13.jpg",
    "srilankavan43.jpg"
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 font-serif text-gray-900 leading-relaxed">
      {/* Header */}
      <header className="mb-16 text-center border-b border-gray-300 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
          Vehicle Classification with YOLOv8
        </h1>
        <p className="text-xl text-gray-600 mb-6 italic">
          Robust detection of 6 vehicle classes for smart traffic monitoring
        </p>
        <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
          <span>By Fahri Zanuar Pradian</span>
          <span>&bull;</span>
          <a href="https://github.com/Fahrizp24/vehicle-classification-yolo" className="text-blue-600 hover:underline">
            GitHub Repository
          </a>
        </div>
      </header>

      {/* Abstract */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">Abstract</h2>
        <p className="mb-4 text-justify">
          In the context of intelligent transportation systems, accurate vehicle detection and classification are paramount for traffic flow analysis and automated toll collection. This project presents a deep learning-based object detection pipeline leveraging the YOLOv8 architecture to classify six distinct categories of vehicles commonly found in South Asian and Southeast Asian traffic: <strong>Car, Threewheel, Bus, Truck, Motorbike, and Van</strong>.
        </p>
        <p className="text-justify">
          By utilizing a balanced dataset and employing transfer learning on the YOLOv8 Small (<code>yolov8s.pt</code>) model, the system achieves an excellent trade-off between inference speed and mean Average Precision (mAP@50), demonstrating strong generalization across diverse traffic conditions.
        </p>
      </section>

      {/* Methodology */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">Methodology</h2>
        
        <h3 className="text-xl font-semibold mb-3 mt-6 text-black">1. Dataset Description</h3>
        <p className="mb-4 text-justify">
          The model was trained on a comprehensive vehicle dataset sourced from Kaggle (<code>nadinpethiyagoda/vehicle-dataset-for-yolo</code>). The dataset was carefully curated to ensure balanced representation across the 6 target classes. This diversity, particularly the inclusion of "Threewheel" (tuk-tuks) alongside standard vehicles, makes the model highly applicable to real-world traffic scenarios in developing regions.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6 text-black">2. Model Choice: YOLOv8 Small</h3>
        <p className="mb-4 text-justify">
          The <strong>YOLOv8 Small (YOLOv8s)</strong> model was selected as the core architecture. Ultralytics' YOLOv8 represents the state-of-the-art in real-time object detection, offering significant improvements in accuracy and speed over its predecessors. The <em>Small</em> variant was specifically chosen because it provides an optimal balance: it is lightweight enough to run in real-time on edge devices (such as traffic cameras or Jetson Nanos) while maintaining a high mAP, which is crucial for distinguishing between visually similar classes like Cars and Vans in crowded scenes.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6 text-black">3. Training Configuration</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Epochs:</strong> 100 with an early stopping patience of 20 epochs.</li>
          <li><strong>Image Size:</strong> 640x640 resolution to capture small distant vehicles.</li>
          <li><strong>Batch Size:</strong> 16, optimized for standard GPU memory constraints.</li>
        </ul>
      </section>
      {/* Quantitative Evaluation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">Quantitative Evaluation</h2>
        <p className="mb-4 text-justify">
          The model achieved an exceptional overall <strong>mAP@50 of 98.3%</strong>. Notably, it also recorded an average inference speed of <strong>6.7ms per image</strong> on a Tesla T4 GPU, demonstrating its high efficiency.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="py-2 px-4 text-left font-semibold">Class</th>
                <th className="py-2 px-4 text-left font-semibold">mAP@50</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 px-4">All Classes</td><td className="py-2 px-4 font-bold">0.983</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 px-4">Car</td><td className="py-2 px-4">0.964</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 px-4">Threewheel</td><td className="py-2 px-4">0.994</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 px-4">Bus</td><td className="py-2 px-4">0.992</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 px-4">Truck</td><td className="py-2 px-4">0.984</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 px-4">Motorbike</td><td className="py-2 px-4">0.971</td></tr>
              <tr><td className="py-2 px-4">Van</td><td className="py-2 px-4">0.993</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2 text-black">Inference Results</h2>
        <p className="mb-6 text-justify">
          The following images demonstrate the model's performance on unseen data from the validation set. Bounding boxes indicate the detected vehicle class along with the confidence score. The model successfully detects multiple overlapping vehicles, handles varying scales, and accurately identifies the Threewheel class.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <figure key={idx} className="bg-white border border-gray-200 rounded p-3 shadow-sm flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded bg-gray-100 mb-3">
                <Image 
                  src={`/hasil_deteksi/${img}`} 
                  alt={`Inference Result ${idx + 1}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  unoptimized
                />
              </div>
              <figcaption className="text-xs text-gray-500 font-mono text-center">
                Fig {idx + 1}: Inference output for `{img}`
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2 text-black">Interactive Demo</h2>
        <p className="mb-6 text-justify">
          You can test the trained model (<code>yolov8s_smart_traffic_best.pt</code>) live using the interactive space below. Upload your own image of traffic or vehicles to see the YOLOv8 model perform classification and bounding box detection in real-time.
        </p>
        
        <div className="w-full h-[600px] bg-white border border-gray-200 rounded p-1 shadow-sm overflow-hidden">
          <iframe
            src="https://Fahrizp24-smart-vehicle-classification.hf.space?embed=true&__theme=light"
            className="w-full h-full border-none rounded"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">Challenges & Limitations</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-justify">
          <li><strong>Data Imbalance:</strong> Since cars form the overwhelming majority of vehicles on the road, it took a considerable amount of time to manually select and curate a perfectly balanced dataset. This careful curation was necessary to prevent the model from biasing toward Cars and to ensure sufficient representation of minority classes like the Threewheel and Van.</li>
          <li><strong>Overlapping Vehicles:</strong> In dense traffic scenarios, vehicles frequently occlude one another. While YOLOv8 handles occlusion well, small or heavily obscured vehicles in the background occasionally suffer from lower confidence scores.</li>
          <li><strong>Computational Resource Limits:</strong> Training on high-resolution images (640x640) for 100 epochs requires significant VRAM. Optimizing the batch size (16) was a necessary step to ensure the training could be completed smoothly within standard GPU constraints (like Kaggle/Colab).</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">Conclusion</h2>
        <p className="mb-4 text-justify">
          The YOLOv8 pipeline demonstrates robust vehicle classification capabilities across 6 distinct classes. Its ability to maintain high precision even with classes like the Threewheel makes it a highly viable solution for intelligent traffic monitoring systems in diverse environments. Furthermore, this YOLOv8 Small model achieves not only exceptional accuracy but also meets rigorous low-latency inference standards (~6.7ms). This makes it highly deployable for real-time live-streaming endpoints, as demonstrated by the Interactive Demo above.
        </p>
      </section>
      
      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 border-t border-gray-200 pt-8 pb-8">
        <p>&copy; {new Date().getFullYear()} Fahri Zanuar Pradian. All rights reserved.</p>
        <p className="mt-2">Designed with an academic template inspired by research journals.</p>
      </footer>
    </main>
  );
}
