/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AG3010', {
    AG3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AG3_VLDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    AG3_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG3_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AG3_DOCWOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    AG3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AG3_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AG3_ATUALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AG3_NIVEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AG3_SUBNIV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'AG3010'
  });
};
