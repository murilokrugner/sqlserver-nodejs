/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AG4990', {
    AG4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AG4_SUBNIV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AG4_VLDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    AG4_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG4_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AG4_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG4_IDIOMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG4_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AG4_DOCWOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    AG4_ATUALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AG4_NIVEL: {
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
    }
  }, {
    tableName: 'AG4990'
  });
};
