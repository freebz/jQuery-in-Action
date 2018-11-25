// Listing 11.2  The code for the name field test

if (!$isPartial && $_POST['name'] === '') {
    $result['info'][] = array(
        'field' => 'name',
        'message' => sprintf($messages['required'], 'Full name')
    );

} else if ((!$isPartial || isset($_POST['name']))
           && strlen($_POST['name']) <= 3
) {

    $result['info'][] = array(
        'field' => 'name',
        'message' => sprintf($messages['short'], 'Full name', 4)
    );
}
