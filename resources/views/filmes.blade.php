<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filmes</title>
    <style>
        .imagemfilme {
            height: 300px;
            max-width: 300px;
        }
    </style>
</head>
<body>
    <h1>filmes</h1>
    @foreach ($results as $result)
        @if (isset($result['primaryImage']) && isset($result['primaryImage']['url']))
            <img class="imagemfilme" src="{{ $result['primaryImage']['url'] }}">
        @else
            <img class="imagemfilme" src="./kiwi.png">
        @endif
        <h2>{{ $result['titleText']['text'] }}</h2>
    @endforeach
    <a href="{{ route('filmes', $page+1) }}">Next >></a>
</body>
</html>