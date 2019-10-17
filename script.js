$(document).ready(function () {
            var table = $('#example').DataTable({
                "columns": [{
                        "data": "userId"
                    },
                    {
                        "data": "id"
                    },
                    {
                        "data": "title"
                    },
                    {
                        "data": "body"
                    },

                ]
            });


            $('#ajaxLoad').on('click', function () {
                table.destroy();
                table = $('#example').DataTable({
                    "ajax": {
                        "url": "https://jsonplaceholder.typicode.com/posts",
                        "dataSrc": ""
                    },
                    "columns": [{
                            "data": "userId"
                        },
                        {
                            "data": "id"
                        },
                        {
                            "data": "title"
                        },
                        {
                            "data": "body"
                        },
                    ]
                });
            })
        });