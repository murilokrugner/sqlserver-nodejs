/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AN6010', {
    AN6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AN6_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AN6_EVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AN6_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AN6_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AN6_USRFUN: {
      type: "IMAGE",
      allowNull: true
    },
    AN6_PARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AN6_COPIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AN6_ASSUNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    AN6_MSG: {
      type: "IMAGE",
      allowNull: true
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
    tableName: 'AN6010'
  });
};
