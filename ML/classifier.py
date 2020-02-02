import slate3k as slate
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
print(onlyfiles)

class Classifier:
    
    def __init__(self):
        self.keyword_dict = pd.read_csv('E:/Jobiffy/ML/template_new.csv')
        self.final_database=pd.DataFrame()
        i = 0 
        while i < len(onlyfiles):
            file = onlyfiles[i] 
            #print(file)
            dat = self.create_profile(file)
            self.final_database = self.final_database.append(dat)
            i +=1
            #print(final_database)
        self.final_database2 = self.final_database['Keyword'].groupby([self.final_database['Candidate Name'], self.final_database['Subject']]).count().unstack()
        self.final_database2.reset_index(inplace = True)
        self.final_database2.fillna(0,inplace=True)
        self.new_data = self.final_database2.iloc[:,1:]
        self.new_data.index = self.final_database2['Candidate Name']
        self.sample2=self.new_data.to_csv('sample.csv')
        self.pd_csv=pd.read_csv('sample.csv')
        self.idf_dict={}
        self.analyser()
        
    
    
    def analyser(self):
        list_col_name=self.pd_csv.columns[1:]
        for elm in list_col_name:
            self.idf_dict[elm]=self.pd_csv[elm].sum()
            print(self.idf_dict)
            
        
    
    def pdfextract(self,file):
        with open(file, 'rb') as f:
            fileReader = slate.PDF(f)
            #print(fileReader)
            #countpage = len(fileReader)
            text = []
            for doc in fileReader:
                text.append(doc.lower())
        return text
    
    #function to read resume ends
    
    
    #function that does phrase matching and builds a candidate profile
    def create_profile(self,file):
        text = self.pdfextract(file) 
        text = str(text)
        text = text.replace("\\n", "")
        text = text.lower()
        #below is the csv where we have all the keywords, you can customize your own
        stats_words = [nlp(text) for text in self.keyword_dict['statistics'].dropna(axis = 0)]
        NLP_words = [nlp(text) for text in self.keyword_dict['nlp'].dropna(axis = 0)]
        ML_words = [nlp(text) for text in self.keyword_dict['machinelearning'].dropna(axis = 0)]
        DL_words = [nlp(text) for text in self.keyword_dict['deeplearning'].dropna(axis = 0)]
        R_words = [nlp(text) for text in self.keyword_dict['r'].dropna(axis = 0)]
        python_words = [nlp(text) for text in self.keyword_dict['python'].dropna(axis = 0)]
        Java_words = [nlp(text) for text in self.keyword_dict['java'].dropna(axis = 0)]
        Game_words = [nlp(text) for text in self.keyword_dict['game'].dropna(axis = 0)]
        AR_words = [nlp(text) for text in self.keyword_dict['ar'].dropna(axis = 0)]
        Data_Engineer_words = [nlp(text) for text in self.keyword_dict['dataengineer'].dropna(axis = 0)]
        Blockchain_words=[nlp(text) for text in self.keyword_dict['blockchain'].dropna(axis = 0)]
        Frontend_words=[nlp(text) for text in self.keyword_dict['frontend'].dropna(axis = 0)]
        Backend_words=[nlp(text) for text in self.keyword_dict['backend'].dropna(axis = 0)]
        Database_words=[nlp(text) for text in self.keyword_dict['database'].dropna(axis = 0)]
        Mobile_words=[nlp(text) for text in self.keyword_dict['mobile'].dropna(axis = 0)]
        Prog_words=[nlp(text) for text in self.keyword_dict['programmer'].dropna(axis = 0)]
        Designer_words=[nlp(text) for text in self.keyword_dict['designer'].dropna(axis = 0)]
        FullStack_words=Frontend_words+Backend_words+Database_words
    
        matcher = PhraseMatcher(nlp.vocab)
        matcher.add('statistics', None, *stats_words)
        matcher.add('nlp', None, *NLP_words)
        matcher.add('machinelearning', None, *ML_words)
        matcher.add('deeplearning', None, *DL_words)
        matcher.add('r', None, *R_words)
        matcher.add('python', None, *python_words)
        matcher.add('dataengineer', None, *Data_Engineer_words)
        matcher.add('java', None, *Java_words)
        matcher.add('game', None, *Game_words)
        matcher.add('ar', None, *AR_words)
        matcher.add('blockchain', None, *Blockchain_words)
        matcher.add('mobile', None, *Mobile_words)
        matcher.add('fullstack', None, *FullStack_words)
        matcher.add('backend', None, *Backend_words)
        matcher.add('frontend', None, *Frontend_words)
        matcher.add('database', None, *Database_words)
        matcher.add('programmer', None, *Prog_words)
        matcher.add('designer', None, *Designer_words)
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
        
        
    def skills_search(self,query):
        print(query)
        rank={}
        print(self.pd_csv['Candidate Name'].values)
        print(self.pd_csv.loc[self.pd_csv['Candidate Name'] == 'rohan murphy'])
        recommendedSkills=[]
        for name in self.pd_csv['Candidate Name'].values:
            val=0.0
            x=self.pd_csv.loc[self.pd_csv['Candidate Name'] == name]
            for elm in query:
                print(recommendedSkills)
                print(self.keyword_dict[elm].tolist())
                recommendedSkills+=self.keyword_dict[elm].tolist()
                val=val+float(x[elm])/float(self.idf_dict[elm])
                print(val)
            rank[name]=val
            print(name)
            print(val)
        rank=sorted(rank.items(), key = lambda kv:(kv[1], kv[0]), reverse=True)  #sorting the results in descending order
        ranked = [x[0] for x in rank]
        print(rank)
        print(recommendedSkills)
        xyz=list(set(recommendedSkills))
        rS=[x for x in xyz if str(x) != 'nan']
        return {"ranked":ranked,"recommendedSkills":rS}
                
    
    def recommend_search(self,cookie):
        print(cookie)
        cokie=eval(cookie)
        query=cokie.keys()
        rank={}
        for name in self.pd_csv['Candidate Name'].values:
            val=0.0
            x=self.pd_csv.loc[self.pd_csv['Candidate Name'] == name]
            for elm in query:
                print(cokie[elm]*float(x[elm])/float(self.idf_dict[elm]))
                val=val+cokie[elm]*float(x[elm])/float(self.idf_dict[elm])
                print(val)
            rank[name]=val
            print(name)
            print(val)
        rank=sorted(rank.items(), key = lambda kv:(kv[1], kv[0]), reverse=True)  #sorting the results in descending order
        ranked = [x[0] for x in rank]
        print(rank)
        return ranked

call=Classifier()
call.skills_search(['java','python'])