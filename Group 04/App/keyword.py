from gensim.summarization import keywords

class KeywordsExtractor:
    def __init__(self, text = ""):
        self.text = text
    def extract(self):
        return keywords(self.text)