/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CC5010', {
    CC5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC5_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC5_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CC5_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CC5_DTFINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    CC5_CONSUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    }
  }, {
    tableName: 'CC5010'
  });
};
