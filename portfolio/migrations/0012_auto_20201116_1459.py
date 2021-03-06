# Generated by Django 3.1.2 on 2020-11-16 13:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0011_auto_20201005_1906'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectTech',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='portfolio',
            name='project_tech',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='portfolio.projecttech'),
        ),
    ]
