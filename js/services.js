angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Chicken curry with rice',
    lastText: 'This coconut-rich, slow-cooked curry is a doddle to prepare for the family and full of kid-friendly vegetables.',
    ingrediants: 'For the curry paste',
    no1: '2 onions, quartered',
    no2: '20g/¾oz fresh root ginger, peeled, coarsely grated',
    no3: '6 garlic cloves, peeled',
    no4: '2 tbsp medium curry powder',
    no5: '2 tbsp sunflower oil',
    ingrediants2: 'For the curry',
    no6: '8 chicken thighs, boned, skinned, halved',
    no7: '500g/1lb 2oz large waxy potatoes, peeled, cut into 3cm/1¼in chunks',
    no8: '3 carrots, peeled, sliced into 1.5cm/½in rounds',
    no9: '400ml tin coconut milk',
    no10: '150g/5oz green beans, trimmed and cut in half and freshly ground black pepper',
    method: 'Method',
    no11: 'Put all of the curry paste ingredients in a food processor and blend. You will need to remove the lid and push the mixture down a couple of times using a rubber spatula.',
    no12: 'Heat a large, non-stick frying pan over a medium heat. Spoon in the curry paste and cook for 2-3 minutes, stirring constantly, until fragrant.',
    no13: 'Season the chicken thighs on all sides with lots of pepper then add to the pan, stir well and cook for 2-3 minutes, turning once or twice until they are pale golden-brown.',
    no14: 'Stir in 100ml/3½fl oz water and bring the mixture to the boil. Transfer to the slow cooker and add the potatoes and carrots.',
    no15: 'In a bowl, Stir in the coconut milk and pour over the curry. Stir well to combine. Cover and cook on high for 3 hours, or until the chicken and vegetables are tender and the sauce has thickened. Just before the end of the cooking time, stir in the green beans.',
    face: 'img/chickenCurry.png'
  }, {
    id: 1,
    name: 'Perfect steak and chips',
    lastText: 'This simple classic takes skill to get exactly right. Click to show you how, with precision-cooked meat.',
    ingrediants: 'For the chips',
    no1: '2 litres/3½ pints vegetable oil',
    no2: '1kg/2lb 4oz floury potatoes, such as Maris Piper, cut into chips',
    no3: '',
    no4: '',
    no5: '',
    ingrediants2: 'For the steak',
    no6: '4 x 275g/10oz sirloin or rib-eye steaks, at room temperature',
    no7: 'splash groundnut oil, or similar flavourless oil',
    no8: 'salt and freshly ground black pepper',
    no9: 'large knob of butter',
    no10: 'watercress, to serve',
    method: 'Method',
    no11: 'For the chips, heat the oil in a deep-fat fryer set to 160C. Alternatively, heat the oil in a deep-sided, heavy-based saucepan until a breadcrumb sizzles and turns golden-brown when dropped into it. (CAUTION: Hot oil can be dangerous. Do not leave unattended.)',
    no12: 'Transfer the chips to a large pan of salted water. Bring the water to the boil, then reduce the heat slightly and simmer the chips until just tender. Drain well and set aside to cool and dry further.',
    no13: 'When the chips have cooled and dried, carefully lower batches of them into the hot oil. Cook for 6-8 minutes, or until pale golden-brown. Remove the chips from the hot oil using a slotted spoon and transfer to a bowl. Increase the temperature of the oil to 190C.',
    no14: 'Heat the oil in a heavy-based, ovenproof frying pan over a high heat until it is smoking hot. Season the steaks with salt.',
    no15: 'When the pan is hot, add the steaks and fry for 2-3 minutes on each side, or until the meat is dark golden-brown on both sides (you may need to do this in batches). Add the butter to the pan and transfer to the oven, Roast the meat for 8 minutes or until cooked to your liking.',
    face: 'img/steakChips.png'
  }, {
    id: 2,
    name: 'Poached salmon & asparagus with wild garlic mayonnaise',
    lastText: 'Bake this fabulous fish dish en papillote for a smart, seasonal main course that looks spectacular when served at the table',
    ingrediants: 'For the Salmon and asparagus',
    no1: 'about 450g fat asparagus spears (after snapping off woody ends)',
    no2: '1 skinless side of salmon',
    no3: '2 unwaxed lemons, 1 zested and juiced',
    no4: '50g butter and cooked new potatoes, to serve',
    no5: '',
    ingrediants2: 'For the mayonnaise',
    no6: '3 large egg yolks',
    no7: '2 tsp English mustard',
    no8: '200ml sunflower oil & 200ml rapeseed oil',
    no9: '1 tbsp white wine vinegar',
    no10: 'white pepper, to taste',
    method: 'Method',
    no11: 'For the mayonnaise, Place the egg yolks and mustard in a mini food processor. Pulse until finely chopped, then scrape into a big mixing bowl. Pour the oils into a jug.',
    no12: 'Whisk the yolks mixture with an electric whisk. Slowly add the oil, first a drip at a time, then in a steady, thin drizzle – the mixture should thicken and start to look like mayonnaise. If at any point it starts to look greasy, add 1 tbsp cold water and continue whisking until all the oil has been added and you have a thick mayonnaise. Add the vinegar and season with salt and white pepper. Lay cling film directly onto the surface of the mayonnaise so a skin doesn’t form, then chill. Will keep for 3 days in the fridge.',
    no13: 'Heat oven to 180C/160C fan/gas 4. Put a large sheet of baking parchment in a large roasting tin and arrange the asparagus in a line that’s long enough for the salmon to sit on. Season, put the salmon on top and scatter over the lemon zest. Thinly slice the remaining lemon and put the slices on top of the salmon with the butter. Pour over the lemon juice and season. Bring the sides of the parchment up and over the salmon and scrunch together to seal, creating a tent over the fish. Bake in the oven for 30 mins.',
    no14: 'Bring the roasting tin to the table, open the parcel, and serve with a bowl of wild garlic mayonnaise and some new potatoes on the side.',
    no15: '',
    face: 'img/salmon.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
