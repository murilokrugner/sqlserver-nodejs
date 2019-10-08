/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CPS010', {
    CPS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPS_CODPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CPS_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CPS_IDBOX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CPS_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CPS_NOMENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CPS_VISUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CPS_NOMSPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CPS_NOMPTG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    }
  }, {
    tableName: 'CPS010'
  });
};
