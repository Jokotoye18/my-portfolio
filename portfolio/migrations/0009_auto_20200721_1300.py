# Generated by Django 3.0.6 on 2020-07-21 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0008_auto_20200701_0003'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='source',
            field=models.URLField(default=''),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='technology',
            field=models.CharField(max_length=200),
        ),
    ]
