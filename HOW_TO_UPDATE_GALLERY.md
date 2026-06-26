# How to Update Gallery Images via GitHub (Simple Guide)

If you want to add new photos to the Gallery page, you can do it completely online through GitHub without needing to write code or download any software. 

Follow these two simple steps:

---

## Step 1: Upload Your Image to GitHub

1. Log into your GitHub account and open this repository.
2. Navigate to this folder: `public` → `images` → `real image`.
   *(Or just click your way there from the main page).*
3. In the top right corner of the file list, click the **"Add file"** button, then select **"Upload files"**.
4. Drag and drop your new image (e.g., `my-new-bearing.jpg`).
   *Tip: Try to keep the file size under 1MB for fast loading.*
5. Scroll down to "Commit changes", write a short message like *"Upload new bearing photo"*, and click the green **"Commit changes"** button.

Now your image is saved on the server!

---

## Step 2: Add the Image to the Gallery Code

Now we just need to tell the website to show the image you just uploaded.

1. Go back to the main repository page.
2. Navigate to this file: `src` → `app` → `gallery` → `GalleryClient.tsx`.
3. In the top right corner of the code box, click the ✏️ **pencil icon** (Edit this file).
4. Scroll down slightly until you see `const GALLERY_ITEMS = [`. You will see a list of items that look like this:
   ```javascript
   {
     id: "g-some-name",
     src: "/images/real image/some-photo.jpg",
     title: "Product Name",
     desc: "Short description of the product",
     category: "Category Name",
     icon: "⚙️",
   },
   ```
5. **Copy** one of those blocks, and paste it right below.
6. **Edit** the pasted block with your new details:
   - `id`: Just make sure it's unique (e.g., `"g-new-bearing"`).
   - `src`: Change the filename to exactly match the image you uploaded in Step 1 (e.g., `"/images/real image/my-new-bearing.jpg"`).
   - `title`: The name of the product.
   - `desc`: A short description.
7. Scroll up to the top right and click the green **"Commit changes..."** button.
8. Click **"Commit changes"** again on the popup.

### You're Done! 🎉
As soon as you click Commit, Vercel will automatically rebuild your website. Wait about 1-2 minutes, refresh your live website, and your new gallery image will be visible!
