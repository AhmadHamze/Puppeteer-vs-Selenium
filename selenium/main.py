from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import re
import time

start = time.perf_counter()

PATH = "/home/ahmad/Templates/chrome-driver/chromedriver"
serv = Service(PATH)
driver = webdriver.Chrome(service=serv)
driver.get("https://10fastfingers.com/typing-test/english")
try:
    
    wordsContainer = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "row1"))
    )
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "highlight"))
    )
    
    spans = re.findall(r"<span wordnr[^<]*", driver.page_source)
    words = map(lambda span : span.split(">")[1], spans)
    words = list(words)
    
    inputField = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "inputfield"))
    )
    for word in words:
        inputField.send_keys(word + " ")
    timer = driver.find_element(By.ID, "timer")
    timer = timer.text[2:]
    timer = int(timer)
    print(f"{(len(words) * 60) / (60 - timer)} WPM")

except Exception:
    print("An error occured!")

driver.quit()

end = time.perf_counter()
print(f"The program took {end - start} seconds")