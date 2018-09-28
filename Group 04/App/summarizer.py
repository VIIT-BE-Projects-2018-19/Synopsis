from gensim.summarization import summarize

class summarizer:
    def __init__(self, text = ""):
        self.text = text
    def summary(self):
        return summarize(self.text)