from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
source = root / "Images Gallary"
output = root / "public" / "projects"
generated = Path(r"C:\Users\ahmed\.codex\generated_images\01a11d0d-d492-71f2-84fb-5389edc1784b")

items = {
    "manazil": [
        (source / "MANAZIL/01-home-desktop.jpeg", "home", 1500),
        (source / "MANAZIL/02-search-results.png", "search", None),
        (source / "MANAZIL/03-property-details.png", "property", None),
        (source / "MANAZIL/04-map-search.png", "map", None),
        (source / "MANAZIL/05-booking-flow.png", "booking", None),
        (source / "MANAZIL/06-dashboard.png", "dashboard", None),
        (source / "MANAZIL/09-ai-assistant.png", "assistant", None),
    ],
    "khadmat": [
        (source / "KHADMAT/01-dashboard.png", "home", None),
        (source / "KHADMAT/02-tickets.png", "tickets", None),
        (source / "KHADMAT/03-ticket-detail.png", "ticket", None),
        (source / "KHADMAT/06-knowledge.png", "knowledge", None),
    ],
    "manhwa-tool-kit": [
        (generated / "exec-542e288b-3ea4-42df-943b-65c0fe73e674.png", "chapter", None),
        (generated / "exec-8657af1a-e1e6-4f94-be5e-28840c16f0a9.png", "projects", None),
        (generated / "exec-fb3bfaa7-197e-4c44-af77-32b6f5723b2f.png", "keys", None),
    ],
    "dentalflow-android": [
        (source / "DentalFlow-Android/02-appointments.png", "appointments", None),
        (source / "DentalFlow-Android/01-owner-dashboard.png", "owner", None),
        (source / "DentalFlow-Android/05-finances.png", "finances", None),
        (source / "DentalFlow-Android/06-reception-dashboard.png", "reception", None),
        (source / "DentalFlow-Android/07-reminders.png", "reminders", None),
    ],
    "dental-clinic-website": [
        (source / "Dental-Clinic-Website/01-home-hero.png", "home", None),
        (source / "Dental-Clinic-Website/02-services.png", "services", None),
        (source / "Dental-Clinic-Website/04-gallery.png", "gallery", None),
        (source / "Dental-Clinic-Website/05-location-contact.png", "contact", None),
        (source / "Dental-Clinic-Website/06-mobile-home.png", "mobile", None),
    ],
    "switchyard": [
        (source / "Switchyard/01-projects-dashboard.png", "overview", None),
        (source / "Switchyard/02-project-detail.png", "project", None),
        (source / "Switchyard/04-task-criteria.png", "criteria", None),
        (source / "Switchyard/07-events-permissions.png", "events", None),
    ],
}

for project, images in items.items():
    destination = output / project
    destination.mkdir(parents=True, exist_ok=True)
    for path, name, crop_height in images:
        with Image.open(path) as original:
            image = ImageOps.exif_transpose(original).convert("RGB")
            if crop_height:
                image = image.crop((0, 0, image.width, min(crop_height, image.height)))
            if image.width > 1800:
                image.thumbnail((1800, 3000), Image.Resampling.LANCZOS)
            image.save(destination / f"{name}.webp", "WEBP", quality=82, method=6)
            print(project, name, image.size)
