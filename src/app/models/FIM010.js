/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIM010', {
    FIM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIM_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIM_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIM_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FIM_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FIM_ALQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIM_CDISSM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FIM_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FIM_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIM_FORLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    FIM_CDTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    }
  }, {
    tableName: 'FIM010'
  });
};
