from rest_framework.generics import ListAPIView, RetrieveAPIView
from article.models import Article
from .serializers import ArticleSerializers


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers
