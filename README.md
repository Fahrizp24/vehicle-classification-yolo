# Vehicle Classification with YOLOv8

This project implements a robust vehicle detection and classification pipeline using the YOLOv8 architecture. It is designed to accurately detect 6 classes of vehicles commonly found in traffic (Car, Threewheel, Bus, Truck, Motorbike, Van).

**Live Project Page:** [https://Fahrizp24.github.io/vehicle-classification-yolo/](https://Fahrizp24.github.io/vehicle-classification-yolo/)

## Overview
This repository contains:
- `vechicle-detection-with-yolo.ipynb`: The primary Jupyter Notebook containing the end-to-end data preparation, YAML configuration, model training, and inference scripts.
- `hasil_deteksi/`: A collection of output inference images from the validation set demonstrating model performance.
- `web/`: A Next.js based static site designed with an academic/research aesthetics to showcase the methodology and results.

## Methodology
- **Dataset:** A curated vehicle dataset sourced from Kaggle (`nadinpethiyagoda/vehicle-dataset-for-yolo`). The dataset features 6 balanced classes common in South/Southeast Asian traffic (Car, Threewheel, Bus, Truck, Motorbike, Van).
- **Model Architecture:** YOLOv8 Small (`yolov8s.pt`) was chosen for its optimal balance between high precision (mAP) and real-time inference speed (low latency).
- **Training:** The model was fine-tuned for 100 epochs using an image size of 640x640 and a batch size of 16.

## Results & Evaluation
- **Quantitative:** The trained model achieved an overall **mAP@50 of 98.3%** and an impressive inference speed of **~6.7ms per image**.
- **Qualitative:** Inference was performed on 10 unseen validation images (stored in `hasil_deteksi/`), successfully identifying overlapping vehicles across various scales with high confidence scores.

## Challenges & Limitations
- **Data Curation:** Since cars form the overwhelming majority of road vehicles, curating a perfectly balanced dataset required manual effort to prevent the model from becoming biased toward cars and ignoring minority classes like the Threewheel.
- **Occlusion:** In dense traffic, heavy occlusion can lower confidence scores for background vehicles.
- **Computational Constraints:** Processing 640x640 images over 100 epochs demanded significant VRAM, requiring careful batch size optimization to prevent out-of-memory errors on standard GPUs.

## Requirements and Execution

This project was originally developed and executed in a **Kaggle** environment to leverage GPU resources (Tesla T4). You have two options to run the machine learning pipeline:

### Option 1: Run via Kaggle (Recommended)
1. Open [Kaggle](https://www.kaggle.com/) and create a new notebook.
2. Upload `vechicle-detection-with-yolo.ipynb` to your workspace.
3. Turn on the **GPU T4x2** accelerator in the session settings.
4. Run the cells sequentially.

### Option 2: Run Locally
To run the core machine learning pipeline on your local machine, ensure you meet the following prerequisites:


1. Clone the repository:
   ```bash
   git clone https://github.com/Fahrizp24/vehicle-classification-yolo.git
   cd vehicle-classification-yolo
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Download the Dataset:
   - Download the dataset from Kaggle: [Vehicle Dataset for YOLO](https://www.kaggle.com/datasets/nadinpethiyagoda/vehicle-dataset-for-yolo)
   - Extract the downloaded ZIP file into a new folder named `dataset/` at the root of this project.

4. Adjust Dataset Paths:
   When opening the notebook, find the cell that defines or loads the `data.yaml` configuration. Change the absolute Kaggle dataset paths (`/kaggle/input/...`) to your newly created local path (e.g., `./dataset/...`).

5. Run the notebook:
   Open `vechicle-detection-with-yolo.ipynb` in Jupyter Notebook or JupyterLab.

## Web Application (Next.js)

To run the local development server for the project presentation page:
```bash
cd web
npm install
npm run dev
```

Visit `http://localhost:3000` to view the page.

## Deployment
The web portion of this project is built to be deployed to GitHub Pages via a static export.
