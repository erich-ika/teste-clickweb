<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Noticias</title>
</head>
<body>
    <h1>Noticias</h1>
    @foreach ($noticias as $noticia)
        <h2>🚨: <a href="{{ route('noticia', $noticia->id) }}">{{ $noticia->title }}</a></h2>
        <p>{{ $noticia->body }}</p>
    @endforeach
</body>
</html>