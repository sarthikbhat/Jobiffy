import slate3k as slate
with open('E:/Jobiffy/ML/Resumes/Sarthik Bhat.pdf', 'rb') as f:
    fileReader = slate.PDF(f)
    print(fileReader)
    countpage = len(fileReader)
    text = []
    for doc in fileReader:
        text.append(doc)
        
        
"""
import PyPDF2
import os
from os import listdir
from os.path import isfile, join
from io import StringIO
import pandas as pd
from collections import Counter
import en_core_web_sm
nlp = en_core_web_sm.load()
from spacy.matcher import PhraseMatcher

#Function to read resumes from the folder one by one
mypath='E:/Jobiffy/ML/Resumes' #enter your path here where you saved the resumes
onlyfiles = [os.path.join(mypath, f) for f in os.listdir(mypath) if os.path.isfile(os.path.join(mypath, f))]

def pdfextract(file):
    fileReader = PyPDF2.PdfFileReader(open(file,'rb'))
    countpage = fileReader.getNumPages()
    count = 0
    text = []
    while count < countpage:    
        pageObj = fileReader.getPage(count)
        count +=1
        t = pageObj.extractText()
        print (t)
        text.append(t)
    return text

#function to read resume ends


#function that does phrase matching and builds a candidate profile
def create_profile(file):
    text = pdfextract(file) 
    text = str(text)
    text = text.replace("\\n", "")
    text = text.lower()
    #below is the csv where we have all the keywords, you can customize your own
    keyword_dict = pd.read_csv('E:/Jobiffy/ML/template_new.csv')
    stats_words = [nlp(text) for text in keyword_dict['Statistics'].dropna(axis = 0)]
    NLP_words = [nlp(text) for text in keyword_dict['NLP'].dropna(axis = 0)]
    ML_words = [nlp(text) for text in keyword_dict['Machine Learning'].dropna(axis = 0)]
    DL_words = [nlp(text) for text in keyword_dict['Deep Learning'].dropna(axis = 0)]
    R_words = [nlp(text) for text in keyword_dict['R'].dropna(axis = 0)]
    python_words = [nlp(text) for text in keyword_dict['Python'].dropna(axis = 0)]
    Java_words = [nlp(text) for text in keyword_dict['Java'].dropna(axis = 0)]
    Game_words = [nlp(text) for text in keyword_dict['Game'].dropna(axis = 0)]
    AR_words = [nlp(text) for text in keyword_dict['AR'].dropna(axis = 0)]
    Data_Engineering_words = [nlp(text) for text in keyword_dict['Data Engineering'].dropna(axis = 0)]
    Blockchain_words=[nlp(text) for text in keyword_dict['Blockchain'].dropna(axis = 0)]
    Frontend_words=[nlp(text) for text in keyword_dict['Front end'].dropna(axis = 0)]
    Backend_words=[nlp(text) for text in keyword_dict['back end'].dropna(axis = 0)]
    Database_words=[nlp(text) for text in keyword_dict['database'].dropna(axis = 0)]
    Mobile_words=[nlp(text) for text in keyword_dict['Mobile'].dropna(axis = 0)]
    FullStack_words=Frontend_words+Backend_words+Database_words

    matcher = PhraseMatcher(nlp.vocab)
    matcher.add('Stats', None, *stats_words)
    matcher.add('NLP', None, *NLP_words)
    matcher.add('ML', None, *ML_words)
    matcher.add('DL', None, *DL_words)
    matcher.add('R', None, *R_words)
    matcher.add('Python', None, *python_words)
    matcher.add('DE', None, *Data_Engineering_words)
    matcher.add('Java', None, *Java_words)
    matcher.add('Game', None, *Game_words)
    matcher.add('AR-VR', None, *AR_words)
    matcher.add('Blockchain', None, *Blockchain_words)
    matcher.add('Mobile', None, *Mobile_words)
    matcher.add('FS', None, *FullStack_words)
    doc = nlp(text)
    
    d = []  
    matches = matcher(doc)
    for match_id, start, end in matches:
        rule_id = nlp.vocab.strings[match_id]  # get the unicode ID, i.e. 'COLOR'
        span = doc[start : end]  # get the matched slice of the doc
        d.append((rule_id, span.text))      
    keywords = "\n".join(f'{i[0]} {i[1]} ({j})' for i,j in Counter(d).items())
    
    ## convertimg string of keywords to dataframe
    df = pd.read_csv(StringIO(keywords),names = ['Keywords_List'])
    df1 = pd.DataFrame(df.Keywords_List.str.split(' ',1).tolist(),columns = ['Subject','Keyword'])
    df2 = pd.DataFrame(df1.Keyword.str.split('(',1).tolist(),columns = ['Keyword', 'Count'])
    df3 = pd.concat([df1['Subject'],df2['Keyword'], df2['Count']], axis =1) 
    df3['Count'] = df3['Count'].apply(lambda x: x.rstrip(")"))
    
    base = os.path.basename(file)
    filename = os.path.splitext(base)[0]
       
    name = filename.split('_')
    name2 = name[0]
    name2 = name2.lower()
    ## converting str to dataframe
    name3 = pd.read_csv(StringIO(name2),names = ['Candidate Name'])
    
    dataf = pd.concat([name3['Candidate Name'], df3['Subject'], df3['Keyword'], df3['Count']], axis = 1)
    dataf['Candidate Name'].fillna(dataf['Candidate Name'].iloc[0], inplace = True)

    return(dataf)
        
#function ends
        
#code to execute/call the above functions

final_database=pd.DataFrame()
i = 0 
while i < len(onlyfiles):
    file = onlyfiles[i]
    print(file)
    dat = create_profile(file)
    final_database = final_database.append(dat)
    i +=1
    print(final_database)

    
#code to count words under each category and visulaize it through Matplotlib

final_database2 = final_database['Keyword'].groupby([final_database['Candidate Name'], final_database['Subject']]).count().unstack()
final_database2.reset_index(inplace = True)
final_database2.fillna(0,inplace=True)
new_data = final_database2.iloc[:,1:]
new_data.index = final_database2['Candidate Name']

sample2=new_data.to_csv('sample.csv')
"""