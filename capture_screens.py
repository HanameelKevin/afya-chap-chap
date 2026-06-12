
from playwright.sync_api import sync_playwright
import time

def take_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        
        # Give Vite a moment to start up
        print("Waiting for frontend...")
        time.sleep(10)
        
        try:
            # 1. Dashboard
            print("Capturing Dashboard...")
            page.goto('http://localhost:5175/dashboard')
            page.wait_for_load_state('networkidle')
            time.sleep(3) # Wait for animations
            page.screenshot(path='dashboard.png')
            
            # 2. Booking Page (Patient View)
            print("Capturing Booking Page...")
            page.goto('http://localhost:5175/patient/book')
            page.wait_for_load_state('networkidle')
            time.sleep(3)
            page.screenshot(path='booking.png')
            
            # 3. AI Assistant Chat
            print("Capturing AI Messages...")
            page.goto('http://localhost:5175/support/messages')
            page.wait_for_load_state('networkidle')
            time.sleep(3)
            # Need to click the 'AI Assistant' tab
            page.click('text=AI Assistant')
            time.sleep(3)
            page.screenshot(path='messages_ai.png')
            
            print("Screenshots captured successfully.")
            
        except Exception as e:
            print(f"Error during screenshot: {e}")
            page.screenshot(path='error_state.png')
            
        browser.close()

if __name__ == "__main__":
    take_screenshots()
