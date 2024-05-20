import pandas as pd

# List of words to pair with products that costumers are interested in
words = ['Buy', 'Purchase', 'Sale Of', 'Good', 'Delicious']

#List of products that costumers are interested in
products = ['Candy', 'Sweet', 'Bubble Gum', 'Pie', 'Child Candy']


# Create an empty list to append both words and products
keywords_list = []

#Create another empty list for ads

#ads_list = []

# Loop through products
for product in products:
    # Loop through words
    for word in words:
        # Append combinations
        keywords_list.append([product, product + ' ' + word])
        keywords_list.append([product, word + ' ' + product])
        
# Inspect keyword list
from pprint import pprint
pprint(keywords_list) #print the keyword list


# Create a DataFrame from list
keywords_df = pd.DataFrame(keywords_list)

#print dataframe for exploration
print(keywords_df)

# Rename the columns of the DataFrame
import pandas as pd
keywords_df = pd.DataFrame(keywords_list, columns = ['Ad Group', 'Keyword'])
print(keywords_df)

# Add a campaign column
import pandas as pd 
SEM_Sofas =keywords_df['Campaign'] = 'Buying Candy'
print(keywords_df)


# Add a criterion type column
keywords_df['Criterion Type'] = 'Exact'
print(keywords_df) #reading dataframe with modifications



# Make a copy of the keywords DataFrame
keywords_phrase = keywords_df.copy()

# Change criterion type match to phrase
keywords_phrase['Criterion Type']  = "Phrase"
keywords_df.append(keywords_phrase)


# Append both DataFrames
keywords_df_final = keywords_df.append(keywords_phrase)

print(keywords_df_final)

# Save the final keywords to a CSV file
summary = keywords_df_final.groupby(['Ad Group', 'Criterion Type'])['Keyword'].count
keywords_df_final_excel = keywords_df_final.to_excel('candy_keyword_generator.xls', encoding='utf-8')
print(summary)

#Implementations and suggestions

# 1 - Create new ADS based on this keywords xls archive
# 2 - Create automated ADS descriptions
# 3 - Get more variations of keywords
# 4 - Organize the dataframe so keywords can be founded easily
