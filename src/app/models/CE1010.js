/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CE1010', {
    CE1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE1_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CE1_ESTISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE1_CMUISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CE1_MUNISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CE1_ALQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CE1_RETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CE1_RMUISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CE1_CTOISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CE1_CPRISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CE1_FORISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CE1_LOJISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE1_PROISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CE1_DESPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CE1_TRIBMU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CE1_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CE1_RMUISE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CE1010'
  });
};
