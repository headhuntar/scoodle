$(() => {
  $("#eventAddParticipant").click(function (e) {
    e.preventDefault();
    const $row = $('<tr>');
    const $rowHeading = $('<th>').attr('scope', 'row').text('Participant Name');
    const $rowVote = $('<td>').text('Yes/No');
    $row.append($rowHeading);
    $row.append($rowVote);
    const table = $(this.parentNode.children[1]);
    table.children("tbody").append($row);
  });
});
