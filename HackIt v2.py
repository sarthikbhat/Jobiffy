import csv
from parsel import Selector
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from pandas import read_csv
driver = webdriver.Chrome(r'C:\Users\Romil Rupen\Downloads\chromedriver_win32\chromedriver')
driver.get('https://www.linkedin.com/')
sleep(5)
username = driver.find_element_by_name("session_key")
username.send_keys('romilshah525@gmail.com')
sleep(8)
password = driver.find_element_by_name('session_password')
password.send_keys('nv513UB8*')
sleep(3)
sign_in_button = driver.find_element_by_class_name('sign-in-form__submit-btn')
sign_in_button.click()
sleep(7)
driver.get('https://www.google.com/')
search_query = driver.find_element_by_name('q')
sleep(2)
search_query.send_keys(f'site:linkedin.com/in AND "Machine Learning" AND "Mumbai"')
search_query.send_keys(Keys.RETURN)
sleep(5)
urls = []
urls = driver.find_elements_by_xpath('//*[@class = "r"]/a[@href]')
urls = [url.get_attribute('href') for url in urls]
sleep(9)
url = urls[0]
driver.get(url)
sleep(6)
sel = Selector(text = driver.page_source)
url = driver.current_url
sleep(2)
experience = sel.xpath('//*[@class = "pv-top-card-v3--experience-list"]')
education = experience.xpath('.//li[@data-control-name = "education_see_more"]//span/text()').extract_first()
education = ' '.join(education.split()) if education else None
body = driver.find_element_by_class_name('profile-detail').text
# body1 = body#
driver.quit()
