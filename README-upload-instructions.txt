KENMORE TOWER WEBSITE — GITHUB PAGES UPLOAD INSTRUCTIONS

Your website is a static HTML/CSS/JS site. It is designed to work on GitHub Pages.

FILES INCLUDED
- index.html
- photos.html
- amenities.html
- location.html
- lease.html
- contact.html
- styles.css
- script.js
- images/ folder
- video/ folder with a placeholder README

HOW TO UPLOAD TO GITHUB
1. Open your GitHub repository: KenmoreTower.
2. Click "Add file" > "Upload files".
3. Drag ALL files and folders from this website folder into GitHub.
   Important: index.html must be at the top level of the repository, not inside another folder.
4. Scroll down and click "Commit changes".
5. Go to Settings > Pages.
6. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
7. Click Save.
8. Wait a few minutes, then open:
   https://khil22.github.io/KenmoreTower/

HOW TO ADD THE WALKTHROUGH VIDEO LATER
Option A: Host the video directly in GitHub
1. Rename your video file to: walkthrough.mp4
2. Put it inside the video folder.
3. Upload it to GitHub.
4. Open index.html in GitHub and click the pencil/edit icon.
5. Search for: WALKTHROUGH VIDEO PLACEHOLDER
6. Replace the entire placeholder <div class="video-placeholder">...</div> with this:

<video controls poster="images/living-room-1.webp" style="width:100%;border-radius:22px;box-shadow:var(--shadow)">
  <source src="video/walkthrough.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

7. Do the same in photos.html.
8. Commit changes.

Important GitHub note:
GitHub may reject very large video files. If the file is too large, use Option B.

Option B: Upload to YouTube as unlisted and embed
1. Upload the video to YouTube.
2. Set visibility to "Unlisted".
3. Click Share > Embed.
4. Copy the iframe code.
5. Replace the video placeholder in index.html and photos.html with the iframe code.
6. Commit changes.

BEST PRACTICE FOR VIDEO
For a rental listing, a 60-120 second walkthrough is ideal. If possible, export/compress the video as MP4, 1080p, under 100MB.

CONTACT INFO CURRENTLY USED
Nick
khil22@yahoo.com
617-838-5853

RENTAL DETAILS CURRENTLY USED
566 Commonwealth Ave #606, Boston, MA 02215
2 bed / 2 bath
Approx. 1,245 sq. ft.
$4,500/month
Optional garage parking: $300/month
Available September 1, 2026
No broker fee
Heat and hot water included
Tenant responsible for electricity and internet/cable
Credit check, references, proof of income, and building application required
$250 building application fee
First month’s rent and security deposit due at signing
No pets
No smoking
Undergraduate students are not permitted per building policy


YOUTUBE WALKTHROUGH UPDATE
The site is already updated to embed this YouTube walkthrough video:
https://youtu.be/1xtYra_62C8
If you upload a replacement video later, edit index.html and photos.html and replace the iframe src value with the new YouTube embed URL. For example, a YouTube link like https://youtu.be/VIDEOID becomes https://www.youtube.com/embed/VIDEOID
