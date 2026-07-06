<!-- REST API - Estimated Reading Time field for posts -->

<?php

add_action('rest_api_init', function () {
    register_rest_field(
        'post',
        'read_time',
        array(
            'get_callback' => function ($post) {

                $post_content = get_post_field('post_content', $post['id']);

                // Remove HTML tags
                $word_count = str_word_count(
                    wp_strip_all_tags($post_content)
                );

                // Average reading speed: 200 words per minute
                $minutes = ceil($word_count / 200);

                return $minutes;
            },
            'schema' => array(
                'description' => 'Estimated reading time.',
                'type' => 'number',
                'context' => ['view', 'edit']
            ),
        )
    );
});