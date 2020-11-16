from django.db import models
from django.template.defaultfilters import slugify


class ProjectTech(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
    
    


class Portfolio(models.Model):
    project_tech = models.ForeignKey(ProjectTech, on_delete=models.CASCADE)
    title = models.CharField(unique=True, max_length=100, db_index=True)
    slug = models.SlugField(max_length=100, db_index=True)
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


class Contact(models.Model):
    name = models.CharField(max_length=150, blank=True)
    email = models.EmailField(max_length=254)
    message = models.TextField()

    def __str__(self):
        return self.name
    