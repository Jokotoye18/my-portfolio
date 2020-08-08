from django.db import models
from django.template.defaultfilters import slugify


class Portfolio(models.Model):
    title = models.CharField(unique=True, max_length=100)
    slug = models.SlugField(max_length=100)
    description = models.TextField()
    technology = models.CharField(max_length=200)
    image = models.ImageField(upload_to="photos")
    source = models.URLField()
    url = models.URLField()

    objects = models.Manager()

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)
