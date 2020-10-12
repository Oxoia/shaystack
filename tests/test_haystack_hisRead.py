from mock import patch

import haystackapi
import hszinc
from haystackapi import HaystackHttpRequest, Ref, DEFAULT_MIME_TYPE
from haystackapi.providers import ping


@patch.dict('os.environ', {'HAYSTACK_PROVIDER': 'haystackapi.providers.ping'})
@patch.object(ping.Provider, 'his_read')
def test_hisRead_with_zinc(mock) -> None:
    # GIVEN
    mock.return_value = ping.PingGrid
    mime_type = hszinc.MODE_ZINC
    request = HaystackHttpRequest()
    grid = hszinc.Grid(columns={'id': {}})
    grid.append({"id": Ref("1234")})
    request.headers["Content-Type"] = mime_type
    request.headers["Accept"] = mime_type
    request.body = hszinc.dump(grid, mode=mime_type)

    # WHEN
    response = haystackapi.his_read(request, "dev")

    # THEN
    mock.assert_called_once_with(Ref("1234"), (None, None), None)
    assert response.status_code == 200
    assert response.headers["Content-Type"].startswith(mime_type)
    assert hszinc.parse(response.body, mime_type) is not None


@patch.dict('os.environ', {'HAYSTACK_PROVIDER': 'haystackapi.providers.ping'})
@patch.object(ping.Provider, 'his_read')
def test_hisRead_with_args(mock) -> None:
    # GIVEN
    mock.return_value = ping.PingGrid
    mime_type = DEFAULT_MIME_TYPE
    request = HaystackHttpRequest()
    request.args['id'] = str(Ref("1234"))

    # WHEN
    response = haystackapi.his_read(request, "dev")

    # THEN
    mock.assert_called_once_with(Ref("1234"), (None, None), None)
    assert response.status_code == 200
    assert response.headers["Content-Type"].startswith(mime_type)
    assert hszinc.parse(response.body, mime_type) is not None
