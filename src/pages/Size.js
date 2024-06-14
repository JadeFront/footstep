import React from 'react'
import './Size.css'
import Footer from '../components/Footer'

const Size = () => {
  return (
    <section className='size'>
        <div className='size-intro'>
            <h1>Sizing</h1>
                <p>If your measurements are between sizes or if one foot's measurement is larger than the other, always move up to the larger size.</p>
        </div>
        
            <div className='size-footwear'>
                <div className='size-chart'>
                    <h1>Women's Sizes</h1>
                    <table>
                        <tr>
                            <th>US</th>
                            <th>UK</th>
                            <th>UER</th>
                            <th>INCH</th>
                            <th>CM</th>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2</td>
                            <td>35</td>
                            <td>8.8</td>
                            <td>22.2</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>3</td>
                            <td>36</td>
                            <td>9</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>6.5</td>
                            <td>4</td>
                            <td>37</td>
                            <td>9.3</td>
                            <td>23.4</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>4.5</td>
                            <td>37.5</td>
                            <td>9.4</td>
                            <td>23.8</td>
                        </tr>
                        <tr>
                            <td>7.5</td>
                            <td>5</td>
                            <td>38</td>
                            <td>9.6</td>
                            <td>24.3</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>5.5</td>
                            <td>38.5</td>
                            <td>9.7</td>
                            <td>24.7</td>
                        </tr>
                        <tr>
                            <td>8.5</td>
                            <td>6</td>
                            <td>39</td>
                            <td>9.8</td>
                            <td>25.1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>7</td>
                            <td>40</td>
                            <td>10.1</td>
                            <td>25.5</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>8</td>
                            <td>41</td>
                            <td>10.3</td>
                            <td>26.4</td>
                        </tr>
                        <tr>
                            <td>10.5</td>
                            <td>9</td>
                            <td>42</td>
                            <td>10.5</td>
                            <td>26.8</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>9.5</td>
                            <td>42.5</td>
                            <td>10.7</td>
                            <td>27.2</td>
                        </tr>
                    </table>
                </div>

                <div className='size-chart'>
                <h1>Men's Sizes</h1>
                    <table>
                        <tr>
                            <th>US</th>
                            <th>UK</th>
                            <th>UER</th>
                            <th>INCH</th>
                            <th>CM</th>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>6</td>
                            <td>39</td>
                            <td>10.1</td>
                            <td>25.6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>6.5</td>
                            <td>40</td>
                            <td>10.1</td>
                            <td>25.7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>7</td>
                            <td>41</td>
                            <td>10.2</td>
                            <td>25.8</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>8</td>
                            <td>42</td>
                            <td>10.3</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>9.5</td>
                            <td>8.5</td>
                            <td>42.5</td>
                            <td>10.4</td>
                            <td>26.4</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>9</td>
                            <td>43</td>
                            <td>10.5</td>
                            <td>26.8</td>
                        </tr>
                        <tr>
                            <td>10.5</td>
                            <td>9.5</td>
                            <td>43.5</td>
                            <td>10.7</td>
                            <td>27.3</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>10</td>
                            <td>44</td>
                            <td>10.9</td>
                            <td>27.7</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>22</td>
                            <td>45</td>
                            <td>11.2</td>
                            <td>28.5</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>12</td>
                            <td>46</td>
                            <td>11.4</td>
                            <td>29</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>13</td>
                            <td>47</td>
                            <td>11.6</td>
                            <td>29.4</td>
                        </tr>
                    </table>
                </div>
            </div>

        <Footer />
    </section>
  )
}

export default Size