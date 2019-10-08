/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SQO010', {
    QO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QO_QUESTAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QO_QUEST: {
      type: "IMAGE",
      allowNull: true
    },
    QO_AREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QO_TOPICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QO_PONTOS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QO_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QO_TIPOOBJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QO_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QO_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QO_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QO_ESCALA: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    QO_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SQO010'
  });
};
